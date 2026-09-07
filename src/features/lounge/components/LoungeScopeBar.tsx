import { workspaceRoleLabel } from '../../../shared/utils/workspaceRole'
import { useLoungeScope } from '../providers/loungeScopeProvider'

export default function LoungeScopeBar() {
  const scope = useLoungeScope()
  const shopName = scope.titleShop?.name ?? (scope.isAdmin ? '전체 입점 공방' : '셀러 라운지')

  return (
    <header className="lounge-scope">
      <div>
        <p className="lounge-scope__kicker">{workspaceRoleLabel(scope.role)}</p>
        <h1 className="lounge-scope__title">{shopName}</h1>
      </div>
      {scope.isAdmin ? (
        <label className="lounge-scope__pick">
          조회 범위
          <select value={scope.scopeId} onChange={(event) => scope.pickScope(event.target.value)}>
            <option value="all">전체 셀러</option>
            {scope.shops.map((shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>
        </label>
      ) : null}
    </header>
  )
}
