<?php

namespace App\Http\Controllers;

use App\Models\TimesSessions;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Solves;

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
        // Serialize the times_history array
        $times_history = serialize($request->times_history);

        // Store solve in database
        $solve = Solves::create($request->solve);
        // Store or update times session
        $times_session = TimesSessions::updateOrCreate(
            ['user_id' => $request->user()->id],
            ['times_history' => $times_history],
        );

        // Build response
        $response = [
            'solve' => $solve,
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
