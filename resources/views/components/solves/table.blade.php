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
            @foreach($user->solves as $solve)
                <tr>
                    <td class="{{ $tdClasses }}">{{ $loop->iteration }}</td>
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
            @endforeach
        @else
            <tr>
                <td colspan="4" class="{{ $tdClasses }}">No solves</td>
            </tr>
        @endif
    </tbody>
</table>
