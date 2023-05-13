public class Solution
{
    int[] dx = new int[] { 0, 0, 1, -1 };
    int[] dy = new int[] { 1, -1, 0, 0 };
    int n, m;
    bool isValid(int i, int j) { return i >= 0 && i < n && j >= 0 && j < m; }
    int dfs(int i, int j, int[][] grid)
    {
        if (!isValid(i, j) || grid[i][j] == 0) return 0;
        int cnt = grid[i][j];
        grid[i][j] = 0;
        for (int k = 0; k < dx.Length; ++k)
        {
            int iNew = dx[k] + i;
            int jNew = dy[k] + j;
            cnt += dfs(iNew, jNew, grid);
        }
        return cnt;
    }
    public int FindMaxFish(int[][] grid)
    {
        n = grid.Length;
        m = grid[0].Length;

        int ans = 0;
        for (int i = 0; i < n; ++i)
        {
            for (int j = 0; j < m; ++j) ans = Math.Max(ans, dfs(i, j, grid));
        }
        return ans;
    }
}