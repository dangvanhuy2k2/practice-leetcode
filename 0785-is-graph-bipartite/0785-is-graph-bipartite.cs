public class Solution
{
    List<List<int>> adj;
    string[] color;
    bool bfs(int u)
    {
        Queue<int> q = new Queue<int>();
        q.Enqueue(u);
        color[u] = "Red";
        while (q.Count > 0)
        {
            
            int top = q.Dequeue();
            foreach (int v in adj[top])
            {
                if (color[v].Equals(""))
                {
                    color[v] = color[top].Equals("Red") ? "Blue" : "Red";
                    q.Enqueue(v);
                }
                else
                {
                    if (!color[v].Equals(color[top])) continue;
                    return false;
                }
            }
        }
        return true;
    }
    public bool IsBipartite(int[][] graph)
    {
        int n = graph.Length;
        adj = new List<List<int>>(n);
        color = new string[n];
        for (int i = 0; i < n; i++) {
            color[i] = "";
            List<int> l = new List<int>();
            foreach(int v in graph[i]) l.Add(v);
            adj.Add(l);
        }

        for (int i = 0; i < n; i++)
        {
            if (!color[i].Equals("") || bfs(i)) continue;
            return false;
        }
        return true;
    }
}