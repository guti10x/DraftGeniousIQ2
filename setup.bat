@echo off

call npm install
call npm update
call npm install --save --legacy-peer-deps @ng-bootstrap/ng-bootstrap
call ng add @ng-bootstrap/ng-bootstrap