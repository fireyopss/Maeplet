<?php
namespace App\Http\Controllers\Credentials;

use App\Actions\Credentials\CreateAction;
use App\DTO\CredentialDTO;
use App\Http\Requests\StoreCredentialRequest;

class CreateController {
    public function __invoke(StoreCredentialRequest $request, CreateAction $action) {
        $dto = new CredentialDTO(...$request->safe());

        $action->execute($dto);

        return redirect()->route('dashboard.credentials');
    }
}