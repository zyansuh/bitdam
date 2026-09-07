interface EmptyStateProps {
  title: string
  body?: string
  action?: { href: string; label: string }
}

export default function EmptyState({ title, body, action }: EmptyStateProps) {
  return (
    <div className="empty-state" role="status">
      <p className="empty-state__title">{title}</p>
      {body ? <p className="empty-state__body">{body}</p> : null}
      {action ? (
        <a className="empty-state__action" href={action.href}>
          {action.label}
        </a>
      ) : null}
    </div>
  )
}
