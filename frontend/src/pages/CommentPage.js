import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'

import {Loader} from '../components/Loader'
import {CommentList} from '../components/CommentList'

export const CommentsPage = () => {
  const [comments, setComments] = useState([]);
  const {loading, request} = useHttp()

  const fetchComments = useCallback(async () => {
    try {
      const fetched = await request('/comment', 'GET', null, {});
      setComments(fetched.comments)
    } catch (e) {}
  }, [request])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  if (loading) {
    return <Loader/>
  }

  return (
    <>
      {!loading && <CommentList comments = {comments} />}
    </>
  )
}