import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeComment, setLikeComment] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeComment(state => state + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/duanyrf.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Duany Dreyton</strong>
              <time title='16 de dezembro às 18:17h' dateTime='2022-12-16 18:17:30'>
                Cerca de 1h atrás
              </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}