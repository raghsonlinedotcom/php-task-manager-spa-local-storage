#!/bin/bash
cd /Users/raghavan.muthu/raghs/prfsnl/github-repos
rm -rf /Applications/XAMPP/htdocs/task-manager-spa-local-storage/

cp -r task-manager-spa-local-storage /Applications/XAMPP/htdocs
chmod 777 /Applications/XAMPP/htdocs/task-manager-spa-local-storage
lsd -lAR /Applications/XAMPP/htdocs/task-manager-spa-local-storage

