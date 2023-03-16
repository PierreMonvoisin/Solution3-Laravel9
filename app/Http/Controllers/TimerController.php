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

        return view('index', [
            'user' => $user,
        ]);
    }
}
