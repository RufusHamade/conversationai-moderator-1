/*
Copyright 2019 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { TypedRecord } from 'typed-immutable-record';

import { IArticlesState } from './articles';
import { ICategoriesState } from './categories';
import { IState as ICommentsState } from './comments';
import { ICommentSummaryScoresStateRecord } from './commentSummaryScores';
import { IFocusStateRecord } from './focus';
import { IPreselectsState } from './preselects';
import { IRulesState } from './rules';
import { ITaggingSensitivitiesState } from './taggingSensitivities';
import { ITagsState } from './tags';
import { ITextSizesStateRecord } from './textSizes';
import { IState as ITopScoresState, ISummaryState as ITopSummaryScoresState } from './topScores';
import { IUsersState } from './users';

export interface IGlobalState {
  categories: ICategoriesState;
  articles: IArticlesState;
  comments: ICommentsState;
  commentSummaryScores: ICommentSummaryScoresStateRecord;
  users: IUsersState;
  tags: ITagsState;
  rules: IRulesState;
  preselects: IPreselectsState;
  taggingSensitivities: ITaggingSensitivitiesState;
  focus: IFocusStateRecord;
  textSizes: ITextSizesStateRecord;
  topScores: ITopScoresState;
  topSummaryScores: ITopSummaryScoresState;
}

export interface IGlobalStateRecord extends TypedRecord<IGlobalStateRecord>, IGlobalState {}