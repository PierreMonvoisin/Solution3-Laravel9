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
        <tr>
            <td class="{{ $tdClasses }}">1</td>
            <td class="{{ $tdClasses }}">10.32</td>
            <td class="{{ $tdClasses }}">11.53</td>
            <td class="{{ $tdClasses }}">12.28</td>
        </tr>
    </tbody>
</table>
