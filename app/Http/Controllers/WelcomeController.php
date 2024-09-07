<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function __invoke()
    {
        return Inertia::render('Welcome', [
            'laravel_version' => \Illuminate\Foundation\Application::VERSION,
            'php_version' => PHP_VERSION,
        ]);
    }
}
