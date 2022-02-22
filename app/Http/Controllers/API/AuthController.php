<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\Auth\LogoutRequest;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Controllers\Controller;
use Auth;

class AuthController extends Controller {
    /**
     * Handle an authentication attempt.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest $request
     * 
     * @return \Illuminate\Http\Response
     */
    public function login(LoginRequest $request) {
        $credentials = $request->only([
            'email',
            'password'
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return;
        }

        return response()->json([
            'errors' => [
                'email' => ['Invalid email or password'],
            ],
        ], 403);
    }

    /**
     * Logout the authed user.
     *
     * @param \App\Http\Requests\Auth\LogoutRequest $request
     * 
     * @return void
     */
    public function logout(LogoutRequest $request) {
        $request->session()->invalidate();

        $request->session()->regenerateToken();
    }
}
