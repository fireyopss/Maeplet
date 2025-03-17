<?php
namespace App\Http\Controllers\Credentials;

use App\Models\Credential;
use Inertia\Inertia;

class IndexController {
    public function __invoke() {
        return Inertia::render('Dashboard',[
            'credentials' =>  Credential::ownedByUser()->orderBy('created_at', 'desc')->get()
        ]);
    }
}