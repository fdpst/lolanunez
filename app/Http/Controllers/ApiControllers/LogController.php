<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserLog;
use Illuminate\Http\JsonResponse;

class LogController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum');
    }

    public function getLogs(Request $request): JsonResponse
    {
        $logs = UserLog::orderBy('access_date', 'desc')
            ->orderBy('created_at', 'desc')
            ->select('id', 'user_id', 'user_name', 'access_date', 'created_at')
            ->get()
            ->map(function ($log) {
                return [
                    'id' => $log->id,
                    'user_id' => $log->user_id,
                    'user_name' => $log->user_name,
                    'access_date' => $log->access_date->format('Y-m-d'),
                ];
            });

        return response()->json($logs, 200);
    }
}
