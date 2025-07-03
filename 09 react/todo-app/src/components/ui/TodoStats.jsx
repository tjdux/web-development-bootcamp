function TodoStats({ todos }) {
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  const progressPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="d-flex align-items-center gap-3">
      <p className="text-muted mb-0">
        총 {totalCount}개 중 {completedCount}개 완료
      </p>
      <p>
        {totalCount > 0 && (
          <div className="progress flex-grow-1" style={{ width: "100px" }}>
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: `${progressPercentage}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemax="100"
              aria-valuemin="0"
            >
              {progressPercentage}
            </div>
          </div>
        )}
      </p>
    </div>
  );
}

export default TodoStats;
