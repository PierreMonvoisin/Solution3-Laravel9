<?php

namespace App\Http\Controllers;

use App\Models\TimesSessions;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Solves;
use Illuminate\Support\Str;

class SolvesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created solve in storage.
     *
     * @param  Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        $userId = $request->user()->id;
        // Serialize the times_history array
        $times_history = serialize($request->times_history);

        // Store or update times session
        TimesSessions::updateOrCreate(
            ['user_id' => $userId],
            ['times_history' => $times_history],
        );
        $times_session = TimesSessions::where('user_id', $userId)
            ->latest()
            ->first();

        if ($times_session->id) {
            $solveData = $request->solve;
            $solveData['session_id'] = $times_session->id;
            // Store solve in database
            $solve = Solves::create($solveData);
        } else {
            $solve = false;
        }

        // Build response
        $response = [
            'solve' => $solve,
            'times_session' => $times_session,
        ];

        // Get response status
        $response['success'] = $solve && $times_session;

        return response()->json($response);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
