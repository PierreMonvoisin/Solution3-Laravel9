<x-app-layout>
    <div class="py-2">
        <div class="max-w-fit px-2">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 text-center">
                    <div id="timer">00.000</div>
                    <button id="action">Start</button>
                </div>
            </div>
        </div>
    </div>

    <x-slot name="scripts">
        <script src="{{ asset('js/timer.js') }}"></script>
    </x-slot>
</x-app-layout>
