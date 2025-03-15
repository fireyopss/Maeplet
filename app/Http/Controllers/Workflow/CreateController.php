<?php
namespace App\Http\Controllers\Workflow;

use App\Actions\Workflow\CreateAction;
use App\Http\Requests\WorkflowCreatedRequest;

class CreateController
{
    public function __invoke(WorkflowCreatedRequest $request, CreateAction $action)
    {
        dd(1);
        dd($request->safe());        
    }
}