struct Data
{
    int sum, i1, i2;
    Data(int sum, int i1, int i2)
    {
        this->sum = sum;
        this->i1 = i1;
        this->i2 = i2;
    }
};
typedef struct Data d;

class Compare
{
public:
    bool operator()(d a, d b)
    {
        return b.sum < a.sum;
    }
};
class Solution
{
public:
    vector<vector<int>> kSmallestPairs(vector<int> &nums1, vector<int> &nums2, int k)
    {
        vector<vector<int>> ans;
        priority_queue<d, vector<d>, Compare> q;
        int s1 = nums1.size(), s2 = nums2.size();
        for (int i = 0; i < s1; i++)
            q.push(d(nums1[i] + nums2[0], i, 0));
        for (int i = 0; i < k && !q.empty(); ++i)
        {
            d top = q.top();
            q.pop();
            vector<int> tmp;
            tmp.push_back(nums1[top.i1]);
            tmp.push_back(nums2[top.i2]);
            ans.push_back(tmp);
            ++top.i2;
            if (top.i2 >= s2)
                continue;
            q.push(d(nums2[top.i2] + nums1[top.i1], top.i1, top.i2));
        }
        return ans;
    }
};