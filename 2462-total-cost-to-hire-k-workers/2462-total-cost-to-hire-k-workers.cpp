typedef pair<int, int> p;
class Compare
{
public:
    bool operator()(p a, p b)
    {
        if (a.first != b.first) return a.first > b.first;
        return a.second > b.second;
    }
};
class Solution
{
public:
    priority_queue<p, vector<p>, Compare> q1, q2;
    vector<int> costs;
    int l , r;
    void addToQueue1() {
         ++l;
        if (l < r) q1.push({costs[l], l});
    } 

    void addToQueue2() {
         --r;
        if (l < r) q2.push({costs[r], r});
    } 
    long long totalCost(vector<int> &costs, int k, int candidates)
    {
        this->costs = costs;
        int n = costs.size();
        l = candidates - 1, r = n - candidates;
        for (int i = 0; i <= l; ++i) q1.push({costs[i], i});
        while (r <= l) 
            ++r;
        for (int i = r; i < n; ++i)
            q2.push({costs[i], i});
        long long res = 0;
        while (k)
        {
            p ans;
            if (q1.empty() && q2.empty()) break;
            if (q1.empty()) {
                ans = q2.top();
                q2.pop();
                addToQueue2();
            }
            else if (q2.empty()) {
                ans = q1.top();
                q1.pop();
                addToQueue1();
            }
            else
            {
                p top1 = q1.top();
                p top2 = q2.top();
                int size1 = q1.size();
                bool isChooseTop1 = true;

                if (top1.first == top2.first && top2.second < top1.second) isChooseTop1 = false;
                if(top1.first > top2.first) isChooseTop1 = false;

                if(isChooseTop1) {
                    ans = top1;
                    q1.pop();
                }
                else {
                    ans = top2;
                    q2.pop();
                }

                if (size1 != q1.size()) addToQueue1();
                else addToQueue2();
            }
            res += ans.first;
            --k;
        }
        return res;
    }
};