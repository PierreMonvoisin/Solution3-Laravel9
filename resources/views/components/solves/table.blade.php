@php
$thClasses = 'py-2 text-xl font-medium font-semibold uppercase tracking-wider border';
$tdClasses = 'py-1 border';
@endphp
<table class="mx-auto" style="width: 50%;">
    <thead>
        <tr>
            <th scope="col" class="{{ $thClasses }}">N°</th>
            <th scope="col" class="{{ $thClasses }}">Time</th>
            <th scope="col" class="{{ $thClasses }}">Ao5</th>
            <th scope="col" class="{{ $thClasses }}">Ao12</th>
        </tr>
    </thead>
    <tbody>
        @foreach($user->solves as $solve)
            <tr>
                <td class="{{ $tdClasses }}">{{ $solve->id }}</td>
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
                }}</td>            </tr>
        @endforeach
    </tbody>
</table>
