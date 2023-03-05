<x-app-layout>
    <div class="py-2">
        <div class="max-w-fit px-2">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 text-center">
                    <div id="timer">00.000</div>
                    <button id="action">Start</button>
                    <div id="message">...</div>
                    <div id="Ao5-message">Average of 5 : <span id="Ao5">00.000</span></div>
                </div>
            </div>
        </div>
    </div>

    <x-slot name="scripts">
        <script src="{{ asset('js/timer-helpers.js') }}"></script>
        <script src="{{ asset('js/timer.js') }}"></script>
    </x-slot>
</x-app-layout>
