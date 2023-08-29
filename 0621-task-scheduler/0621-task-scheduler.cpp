typedef pair<int, int> p;
class Solution
{
public:
    void log(priority_queue<p> q)
    {
        while (!q.empty())
        {
            p top = q.top();
            q.pop();
            cout << top.first << " - " << (char)('A' + top.second) << ",";
        }
        cout << "\n";
    }
    int leastInterval(vector<char> &tasks, int k)
    {
        priority_queue<p> q;
        int block[26], cnt[26];
        for(int i = 0; i < 26; ++i) {
            block[i] = 1;
            cnt[i] = 0;
        }
        for (char t : tasks)
        {
            int idx = (int)(t - 'A');
            ++cnt[idx];
        }
        int time = 1, size = tasks.size();
        while (true)
        {
            for (int i = 0; i < 26; ++i)
            {
                if (cnt[i] == 0)
                    continue;
                if (block[i] == time)
                    q.push({cnt[i], i});
            }
            if (!q.empty())
            {
                p top = q.top();
                q.pop();
                --cnt[top.second];
                block[top.second] = time + k + 1;
                --size;
            }
            if(size == 0) break;
            ++time;
        }
        return time;
    }
};