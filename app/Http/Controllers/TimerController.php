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

        if ($user->timesSessions) {
            $times_history = unserialize($user->timesSessions->times_history);
            $times_history_to_string = '[' . implode(', ', $times_history) . ']';
            $user->timesSessions->times_history = $times_history_to_string;
        }

        return view('index', [
            'user' => $user,
        ]);
    }
}
