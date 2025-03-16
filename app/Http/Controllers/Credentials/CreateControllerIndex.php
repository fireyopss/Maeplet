<?php
namespace App\Http\Controllers\Credentials;

use Inertia\Inertia;

class CreateControllerIndex {
    public function __invoke() {
        return Inertia::render('dashboardpages/credentials/createCredentials');
    }
}