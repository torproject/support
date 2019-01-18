#!/usr/bin/env perl
use strict;
use warnings;
use File::Path qw(make_path remove_tree);
# download from https://gitweb.torproject.org/tor-glossary.git/plain/glossary_all_langs.csv
my $file = 'glossary_all_langs.csv';
open (my $fh, '<', $file) or die "Couldn't open $file: $!\n";
my $i = 0;
my $dir = 'content/glossary';
mkdir $dir unless (-d $dir);

foreach my $line (<$fh>) {
    next if ($line =~ /^[<\.]/);
    my @fields = split(',', $line);
    my $term = $fields[0];
    next unless ($term);
    $term =~ s/^\s*(.+)\s*$/$1/;
    print "Creating folder for '$term'\n";
    my $path = "$dir/glossary-$i";
    #print "\rCreating $path";
    unless (-d $path) {
        make_path ($path)
	    or die "Could not create '$path': $!\n";
    }
    my $saveto = "$path/contents.lr";
    open (my $fhcontent, '>', $saveto)
	or die "Couldn't write to '$saveto': $!\n";
    print $fhcontent "_model: glossary
---
title: $term
---
seo_slug: $term
---
description:
";
    close $fhcontent;
    $i++;
}
print "Done.\n";
