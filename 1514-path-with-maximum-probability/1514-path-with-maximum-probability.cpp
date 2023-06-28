typedef pair<double, int> p;
class Solution {
   public:
    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) {
        priority_queue<p> q;
        vector<p> adj[10005];
        for (int i = 0; i < edges.size(); ++i) {
            int u = edges[i][0];
            int v = edges[i][1];
            adj[u].push_back({succProb[i], v});
            adj[v].push_back({succProb[i], u});
        }
        bool visit[n];
        memset(visit, false, sizeof(visit));
        q.push({1, start});

        while (!q.empty()) {
            p top = q.top();
            q.pop();
            if (top.second == end) return top.first;
            visit[top.second] = true;
            for (p it : adj[top.second]) {
                if (visit[it.second]) continue;
                q.push({top.first * it.first, it.second});
            }
        }

        return 0;
    }
};