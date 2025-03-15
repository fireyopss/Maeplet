<?php
namespace App\Http\Controllers\Workflow;

use App\Actions\Workflow\DeleteAction;
use App\Models\Workflow;

class DeleteController {

    public function __invoke(DeleteAction $action,  Workflow $workflow) {
        $action->execute($workflow);
        return redirect()->route('dashboard.workflow');
    }

}