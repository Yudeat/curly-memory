'use client';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getPage } from '../redux/actions/page';
import { getPageList } from '../redux/actions/pageList';
import { getPageListByTag } from '../redux/actions/pageListByTag';
import { getPageListByCategory } from '../redux/actions/pageListByCategory';

import { PageList } from './pageList';
import { PageListByTag } from './pageListByTag';
import { PageListByCategory } from './pageListByCategory';

import { Page } from './page';

export const PagePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pageId } = useParams();

  const pageList = useSelector((state) => state.pageList);
  const pageListByTag = useSelector((state) => state.pageListByTag);
  const pageListByCategory = useSelector((state) => state.pageListByCategory);

  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    dispatch(getPage(pageId));
  }, [dispatch, pageId]);

  useEffect(() => {
    dispatch(getPageList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPageListByTag());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPageListByCategory());
  }, [dispatch]);

  if (page) {
    return (
      <Page
        page={page}
        pageList={pageList}
        pageListByTag={pageListByTag}
        pageListByCategory={pageListByCategory}
      />
    );
  }

  return <div>Loading...</div>;
};          
