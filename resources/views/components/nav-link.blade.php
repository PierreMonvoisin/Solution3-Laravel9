@props(['active'])

@php
$classes = ($active ?? false)
            ? 'border-indigo-400 text-gray-900 focus:outline-none focus:border-indigo-700'
            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300';
@endphp

<a
    {{ $attributes->merge([
        'class' => $classes . 'inline-flex items-center px-1 pt-1 border-b-2 font-medium leading-5 transition duration-150 ease-in-out',
    ]) }}>
    {{ $slot }}
</a>
