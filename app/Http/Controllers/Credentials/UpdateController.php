<?php
namespace App\Http\Controllers\Credentials;

use App\Actions\Credentials\UpdateAction;
use App\DTO\CredentialDTO;
use App\Http\Requests\UpdateCredentialRequest;
use App\Models\Credential;

class UpdateController {

    public function __invoke(UpdateCredentialRequest $request, UpdateAction $action, Credential $credential ) {
        $dto = new CredentialDTO(...$request->safe());
        $action->execute($dto, $credential);
        return redirect()->route('dashboard.credentials');
    }

}