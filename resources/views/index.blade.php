<x-app-layout>
    <div class="py-2">
        <div class="max-w-fit px-2">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 text-center">
                    <div id="scramble" style="font-size: x-large"></div>
                    <h1 id="timer" class="py-4" style="font-size: xxx-large">00.000</h1>
                    <div id="Ao5-message" class="text-xl">Average of 5 : <span id="Ao5">--</span></div>
                    <div id="Ao12-message" class="text-xl">Average of 12 : <span id="Ao12">--</span></div>
                </div>
                <div class="p-6 text-gray-900 text-center">
                    @include('components.solves.table')
                </div>
            </div>
        </div>
    </div>

    <x-slot name="scripts">
{{--        @dd($user->timesSessions->times_history)--}}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        </script>

        <script src="{{ asset('js/constants.js') }}"></script>
        <script>
            const USER_ID = {{ auth()->user()->id }};
        </script>
        <script>
            const timesHistoryFromDatabase = '{{
                $user->timesSessions ?
                    $user->timesSessions->times_history :
                    ''
            }}';
        </script>
        <script src="{{ asset('js/timer.js') }}"></script>
        <script src="{{ asset('js/averages.js') }}"></script>
        <script src="{{ asset('js/scramble.js') }}"></script>
        <script src="{{ asset('js/solves.js') }}"></script>
    </x-slot>
</x-app-layout>
