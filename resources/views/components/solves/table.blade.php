@php
$thClasses = 'py-2 text-xl font-medium font-semibold uppercase tracking-wider border';
$tdClasses = 'py-1 border';
@endphp
<table class="mx-auto" style="width: 50%;" id="solvesTable">
    <thead>
        <tr>
            <th scope="col" class="{{ $thClasses }}">N°</th>
            <th scope="col" class="{{ $thClasses }}">Time</th>
            <th scope="col" class="{{ $thClasses }}">Ao5</th>
            <th scope="col" class="{{ $thClasses }}">Ao12</th>
        </tr>
    </thead>
    <tbody>
        @if($user->solves->isNotEmpty())
            @php
                $solves = $user->solves()->orderBy('created_at', 'desc')->paginate(10);
                $leftButtonVisible = false;
                $rightButtonVisible = false;
            @endphp
            @foreach($solves as $solve)
                <tr>
                    <td class="{{ $tdClasses }}">{{ $user->solves->count() - $loop->iteration + 1 }}</td>
                    <td class="{{ $tdClasses }}">{{ $solve->time_formatted }}</td>
                    <td class="{{ $tdClasses }}">{{
                        $solve->average_of_5 !== 0 ?
                            $solve->average_of_5_formatted :
                            '--'
                    }}</td>
                    <td class="{{ $tdClasses }}">{{
                        $solve->average_of_12 !== 0 ?
                            $solve->average_of_12_formatted :
                            '--'
                    }}</td>
                </tr>

                <!-- Link to the previous page if it exists -->
                @if($solves->previousPageUrl() && ! $leftButtonVisible)
                    @php $leftButtonVisible = true; @endphp
                    <a href="{{ $solves->previousPageUrl() }}">
                        Previous Page
                    </a>
                @endif

                <!-- Link to the next page if it exists -->
                @if($solves->nextPageUrl() && ! $rightButtonVisible)
                    @php $rightButtonVisible = true; @endphp
                    <a href="{{ $solves->nextPageUrl() }}">
                        Next Page
                    </a>
                @endif
            @endforeach
        @else
            <tr id="emptyTableMessage">
                <td colspan="4" class="{{ $tdClasses }}">No solves</td>
            </tr>
        @endif
    </tbody>
</table>
