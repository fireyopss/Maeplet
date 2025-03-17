<?php
namespace App\Http\Controllers\Credentials;

use App\Actions\Credentials\DeleteAction;
use App\Models\Credential;

class DeleteController 
{
    public function __invoke(DeleteAction $action, Credential $credential) {
        $action->execute($credential);
        return redirect()->route('dashboard.credentials');
    }
}