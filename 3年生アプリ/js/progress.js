// ========== 進捗管理モジュール ==========

const Progress = (() => {

  // 進捗を保存（upsert）
  async function save({ userId, unitId, lessonType, completed, score, maxScore, stars }) {
    const { error } = await supabaseClient
      .from('progress')
      .upsert({
        user_id:     userId,
        unit_id:     unitId,
        lesson_type: lessonType,
        completed,
        score,
        max_score:   maxScore,
        stars,
        completed_at: completed ? new Date().toISOString() : null,
        updated_at:   new Date().toISOString(),
      }, {
        onConflict: 'user_id,unit_id,lesson_type'
      });

    if (error) console.error('進捗保存エラー:', error);
  }

  // 指定ユーザーの全進捗を取得
  async function getAll(userId) {
    const { data, error } = await supabaseClient
      .from('progress')
      .select('*')
      .eq('user_id', userId);

    if (error) {
      console.error('進捗取得エラー:', error);
      return [];
    }
    return data || [];
  }

  // 特定単元・タイプの進捗を取得
  async function get(userId, unitId, lessonType) {
    const { data } = await supabaseClient
      .from('progress')
      .select('*')
      .eq('user_id', userId)
      .eq('unit_id', unitId)
      .eq('lesson_type', lessonType)
      .single();
    return data;
  }

  // スター合計を計算
  function totalStars(progressList) {
    return progressList.reduce((sum, p) => sum + (p.stars || 0), 0);
  }

  // 単元の進捗率を計算 (0～100)
  function unitProgress(progressList, unitId) {
    const types = ['explanation', 'practice', 'test'];
    const completed = types.filter(t =>
      progressList.some(p =>
        p.unit_id === unitId && p.lesson_type === t && p.completed
      )
    ).length;
    return Math.round((completed / types.length) * 100);
  }

  // スコアからスター数を計算
  function calcStars(score, maxScore) {
    const pct = score / maxScore;
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.5) return 1;
    return 0;
  }

  return { save, getAll, get, totalStars, unitProgress, calcStars };
})();
