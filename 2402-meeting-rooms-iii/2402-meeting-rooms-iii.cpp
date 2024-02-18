typedef long long ll;
typedef pair<ll, int> p;

class Solution
{
public:
    int mostBooked(int n, vector<vector<int>> &meetings)
    {
        sort(meetings.begin(), meetings.end());
        priority_queue<int, vector<int>, greater<int>> rooms;
        priority_queue<p, vector<p>, greater<p>> times;
        int cnt[n + 1];
        ll lastTime[n + 1];
        memset(cnt, 0, sizeof(cnt));
        memset(lastTime, 0ll, sizeof(lastTime));
        for (int i = 0; i < n; i++)
            rooms.push(i);
        for (vector<int> v : meetings)
        {
            int s = v[0], e = v[1];
            while (!times.empty())
            {
                p top = times.top();
                if (top.first > s)
                    break;
                rooms.push(top.second);
                times.pop();
            }
            if (rooms.empty())
            {
                p top = times.top();
                lastTime[top.second] = top.first;
                times.pop();
                rooms.push(top.second);
            }
            int r = rooms.top();
            ++cnt[r];
            rooms.pop();
            if (lastTime[r] <= s)
                times.push({e, r});
            else
                times.push({lastTime[r] + e - s, r});
        }
        int min = cnt[n - 1], ans = n - 1;
        for (int i = n - 2; i >= 0; i--)
        {
            if (cnt[i] < min)
                continue;
            min = cnt[i];
            ans = i;
        }
        return ans;
    }
};