<?php

namespace App\Filament\Resources;

use App\Filament\Resources\WorkflowResource\Pages;
use App\Filament\Resources\WorkflowResource\RelationManagers;
use App\Models\Project;
use App\Models\Workflow;
use Filament\Forms;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class WorkflowResource extends Resource
{
    protected static ?string $model = Workflow::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Select::make('project_id')
                    ->label('Project')
                    ->options(
                        Project::all()->pluck('name', 'id')
                    ),
                    TextInput::make('name')
                    ->label('Name')
                    ->required()
                    ->placeholder('Enter the workflow name'),
                    TextInput::make('description')
                    ->label('Description')
                    ->placeholder('Enter the workflow description'),

                    Repeater::make('workflow_data')
                    ->schema([
                        TextInput::make('key')
                            ->label('Key')
                            ->required()
                            ->placeholder('Enter the key'),
                        TextInput::make('value')
                            ->label('Value')
                            ->required()
                            ->placeholder('Enter the value'),
                    ])

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListWorkflows::route('/'),
            'create' => Pages\CreateWorkflow::route('/create'),
            'edit' => Pages\EditWorkflow::route('/{record}/edit'),
        ];
    }
}
