<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\View\View;

class TimerController extends Controller
{
    /**
     * Display the timer with all its information.
     *
     * @return View
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $user->timesSessions->times_history = $user->timesSessions
            ? '[' . implode(', ', unserialize($user->timesSessions->times_history)) . ']'
            : '[]';

        return view('index', [
            'user' => $user,
        ]);
    }
}
