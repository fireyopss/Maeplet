<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialController extends Controller
{

    public function handleSocialLogin(Request $request) {
        //get path
        $path = $request->path();

        $socialProvider = explode('/', $path)[1];

        $socialUser = Socialite::driver($socialProvider)->user();

        //checks if user exists already
        $isUser = User::where('email', $socialUser->email)->first();

        if($isUser){
            $userToUpdate = User::find($isUser->id);
            $userToUpdate->{$socialProvider . '_id'} = $socialUser->id;
            $userToUpdate->save();
            Auth::login($userToUpdate);
            return redirect()->route('dashboard');
        }else{
            $userToCreate = User::updateOrCreate(
                [
                    $socialProvider . '_id' => $socialUser->id,
                ],
                [
                    'name' => $socialUser->name,
                    'email' => $socialUser->email,
                    'avatar' => $socialUser->avatar ?? "n/a",
                    'password' => 'n/a'
                ]
            );

            Auth::login($userToCreate);
            return redirect()->route('dashboard');
        }



    }

}
