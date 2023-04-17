module Wasp.Cli.Command.CreateNewProject.Common where

import Control.Monad.Except (throwError)
import Wasp.Cli.Command (Command, CommandError (..))

data ProjectInfo = ProjectInfo
  { _projectName :: String,
    _appName :: String,
    _templateName :: Maybe String
  }

throwProjectCreationError :: String -> Command a
throwProjectCreationError = throwError . CommandError "Project creation failed"
