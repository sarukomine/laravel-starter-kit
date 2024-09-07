<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="stylesheet" href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap">

    @vite(['resources/css/app.css', 'resources/scripts/app.js'])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
