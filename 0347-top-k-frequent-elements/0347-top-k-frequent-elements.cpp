typedef pair<int, int> p;
class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        priority_queue<p, vector<p>, greater<p>> q;
        sort(nums.begin(), nums.end());
        nums.push_back(1e9);
        int cnt = 1, prevNum = nums[0];
        for (int i = 1; i < nums.size(); ++i) {
            int val = nums[i];
            if (val == prevNum) {
                ++cnt;
            }
            else {
                q.push({ cnt, prevNum });
                if (q.size() > k) {
                    q.pop();
                }
                cnt = 1;
            }
            prevNum = val;
        }
        vector<int> ans;
        while (!q.empty()) {
            ans.push_back(q.top().second);
            q.pop();
        }
        
        return ans;
    }
};
