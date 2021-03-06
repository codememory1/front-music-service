<?php

use App\Controllers\MainController;
use Codememory\Routing\Router;

/**
 *
 * =>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>=>
 * Create routes below that are relevant to the application
 * <=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=<=
 *
 */

Router::get('/:path', MainController::class . '#home')->with('path', '.*');

Router::subdomainGroup('player', function () {
    Router::get('/:path', MainController::class . '#player')->with('path', '.*');
});