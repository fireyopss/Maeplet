<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SocialController;
use App\Http\Controllers\WorkflowController;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

Route::get('/', function () {
    return Inertia::render('maeplet/welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/pricing', function(){
    return Inertia::render('maeplet/pricing');
})->name('pricing');

Route::get('/demo', function(){
    return Inertia::render('maeplet/demo');
})->name('demo');

Route::get('/demo2', function(){
    return Inertia::render('maeplet/demo2');
})->name('demo2');



Route::get('/docs', function(){
    return Inertia::render('maeplet/docs');
})->name('docs');

Route::get('/scrollingsh', function(){
    return Inertia::render('maeplet/scrollingscreenshot');
})->name('scrollingsh');



Route::get('/monitor', function(){
    return Inertia::render('maeplet/advancedMonitoring');
})->name('monitor');

// Route::prefix("dashboard")->group(function(){
//     Route::get("/",function(){
//         return Inertia::render('Dashboard');
//     });
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

   // /dashboard/home

   Route::get('/dashboard/home', function () {
    return Inertia::render('Dashboard');
    })->name('dashboard.home');

    Route::get('/dashboard/intro', function () {
        return Inertia::render('Dashboard');
        })->name('dashboard.intro');

    Route::get('/dashboard/monitor', function () {
        return Inertia::render('Dashboard');
        })->name('dashboard.monitor');

        Route::get('/dashboard/workflow', function(){
            return Inertia::render('Dashboard');
        })->name('dashboard.workflow');

        Route::get('/dashboard/workflow/create',function(){
            return Inertia::render('dashboardpages/workflows/createWorkflow',[
                'projects' => User::find(Auth::id())->projects
            ]);
        });

        Route::post('/dashboard/workflow/create', [WorkflowController::class, 'createWorkflow'])->name('workflows.store');


        Route::get('/dashboard/credentials', function(){
            return Inertia::render('Dashboard');
        })->name('dashboard.credentials');

        Route::get('/dashboard/billing', function(){
            return Inertia::render('Dashboard');
        })->name('dashboard.billing');
});



Route::get('/auth/google/redirect', function () {
    return Socialite::driver('google')->redirect();
});


Route::get('/auth/google/callback', [SocialController::class, 'handleSocialLogin']);


Route::get('/auth/discord/redirect', function () {
    return Socialite::driver('discord')->redirect();
});


Route::get('/auth/discord/callback', [SocialController::class, 'handleSocialLogin']);

Route::get('/auth/github/redirect', function () {
    return Socialite::driver('github')->redirect();
});


Route::get('/auth/github/callback', [SocialController::class, 'handleSocialLogin']);


Route::get('/auth/microsoft/redirect', function () {
    return Socialite::driver('microsoft')->redirect();
});


Route::get('/auth/microsoft/callback', function () {
    $user = Socialite::driver('microsoft')->user();
    dd($user);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
