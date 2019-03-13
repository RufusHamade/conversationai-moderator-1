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

import React from 'react';
import { Link } from 'react-router';

import { Menu, Person, Search, Settings } from '@material-ui/icons';

import { ICategoryModel } from '../../../models';
import {
  GUTTER_DEFAULT_SPACING,
  HEADER_HEIGHT, HEADLINE_TYPE, LIGHT_PRIMARY_TEXT_COLOR, NICE_DARK_BLUE,
  NICE_MIDDLE_BLUE,
} from '../../styles';
import { css, stylesheet } from '../../utilx';
import { searchLink, settingsLink } from '../routes';

const STYLES = stylesheet({
  header: {
    alignItems: 'center',
    background: NICE_DARK_BLUE,
    color: LIGHT_PRIMARY_TEXT_COLOR,
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    height: `${HEADER_HEIGHT}px`,
  },

  headerItem: {
    color: LIGHT_PRIMARY_TEXT_COLOR,
    textAlign: 'center',
    paddingLeft: `${GUTTER_DEFAULT_SPACING}px`,
    paddingRight: `${GUTTER_DEFAULT_SPACING}px`,
    paddingTop: `${10}px`,
    marginTop: `${3}px`,
    flexGrow: 0,
    height: `${HEADER_HEIGHT - 10 - 3}px`,
  },

  headerItemSelected: {
    background: NICE_MIDDLE_BLUE,
    borderTopLeftRadius: `${6}px`,
    borderTopRightRadius: `${6}px`,
  },

  headerLink: {
    color: LIGHT_PRIMARY_TEXT_COLOR,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },

  headerText: {
    fontSize: '10px',
    color: LIGHT_PRIMARY_TEXT_COLOR,
  },

  menuIcon: {
    color: LIGHT_PRIMARY_TEXT_COLOR,
    margin: `0 10px  0 20px`,
  },

  title: {
    ...HEADLINE_TYPE,
    fontSize: '18px',
    fontWeight: 600,
    margin: '0 30px',
  },
});

export interface IHeaderBarProps {
  category?: ICategoryModel;
  isAdmin?: boolean;
  isMe?: boolean;
  showSidebar?(): void;
  logout(): void;
}

export class HeaderBar extends React.Component<IHeaderBarProps> {

  render() {
    function renderHeaderItem(icon: any, text: string, link: string, selected?: boolean) {
      let styles = {...css(STYLES.headerItem)};
      if (selected) {
        styles = {...css(STYLES.headerItem, STYLES.headerItemSelected)};
      }

      return (
        <div key={text} {...styles}>
          <Link to={link} aria-label={text} {...css(STYLES.headerLink)}>
            <div>{icon}</div>
            <div {...css(STYLES.headerText)}>{text}</div>
          </Link>
        </div>
      );
    }

    const {
      category,
      isAdmin,
      showSidebar,
      logout,
    } = this.props;

    const categoryStr = category ? `Section: ${category.label}` : 'All Sections';
    // const categoryFilter = category ? `${FILTER_CATEGORY}=${category.id}` : null;

    // let allArticles = dashboardLink();
    // let myArticles = dashboardLink(FILTER_MODERATOR_ISME);
    // if (categoryFilter) {
    //   allArticles += `/${categoryFilter}`;
    //   myArticles += `+${categoryFilter}`;
    // }

    return (
      <header key="header" role="banner" {...css(STYLES.header)}>
        {showSidebar &&
        <div key="appName" onClick={showSidebar}>
          <span key="icon" {...css(STYLES.menuIcon)}><Menu  style={{ fontSize: 30 }} /></span>
        </div>
        }
        <span key="cat" {...css(STYLES.title)}>{categoryStr}</span>
        {/*{renderHeaderItem(<icons.ListIcon/>, 'All Articles', allArticles, !isMe)}*/}
        {/*{renderHeaderItem(<icons.ListIcon/>, 'My Articles', myArticles, isMe)}*/}
        <div key="spacer" style={{flexGrow: 1}}/>
        {renderHeaderItem(<Search/>, 'Search', searchLink())}
        {isAdmin && renderHeaderItem(<Settings/>, 'Settings', settingsLink())}
        <div key="logout" {...css(STYLES.headerItem)}>
          <div {...css(STYLES.headerLink)} aria-label="Logout" onClick={logout}>
            <div><Person/></div>
            <div {...css(STYLES.headerText)}>Logout</div>
          </div>
        </div>
      </header>
    );
  }
}