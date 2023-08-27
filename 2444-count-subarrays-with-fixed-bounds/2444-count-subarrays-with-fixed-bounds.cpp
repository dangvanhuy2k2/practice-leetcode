typedef pair<int, int> p;
class Compare1
{
public:
    bool operator()(p below, p above)
    {
        if (below.first != above.first)
        {
            return below.first > above.first;
        }
        return below.second > above.second;
    }
};

class Compare2
{
public:
    bool operator()(p below, p above)
    {
        if (below.first != above.first)
        {
            return below.first < above.first;
        }
        return below.second > above.second;
    }
};

class Solution
{
public:
    long long ans = 0;
    int l = 0;
    priority_queue<p, vector<p>, Compare2> maxQ;
    priority_queue<p, vector<p>, Compare1> minQ;
    void updateAns(int r, int minK, int maxK)
    {
        while (l <= r)
        {
            while (!minQ.empty() && minQ.top().second < l)
                minQ.pop();
            while (!maxQ.empty() && maxQ.top().second < l)
                maxQ.pop();
            if (!minQ.empty() && !maxQ.empty() && maxQ.top().first == maxK && minQ.top().first == minK)
                ans += r - max(maxQ.top().second, minQ.top().second);
            ++l;
        }
    }
    long long countSubarrays(vector<int> &nums, int minK, int maxK)
    {
        for (int r = 0; r < nums.size(); ++r)
        {
            int val = nums[r];
            if (val > maxK || val < minK)
            {
                updateAns(r, minK, maxK);
            }
            else
            {
                minQ.push({nums[r], r});
                maxQ.push({nums[r], r});
            }
        }
        updateAns(nums.size(), minK, maxK);
        return ans;
    }
};