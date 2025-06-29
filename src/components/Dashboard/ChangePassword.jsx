import { useState } from 'react';

const ChangePassword = () => {
    const [form, setForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (form.newPassword !== form.confirmPassword) {
            setError('New passwords do not match.');
            return;
        }
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setSuccess('Password changed successfully!');
            setForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        }, 1200);
    };

    return (
        <div className="main-wrapper">
            <div className="account-content">
                <div className="login-wrapper">
                    <span className="login-sides"></span>
                    <div className="login-content">
                        <div className="login-userset auth-wrapper">
                            {/* <div className="auth-login-logo login-logo text-center mb-4">
                                <h3 className="font-bold">Change Password</h3>
                            </div> */}
                            <form onSubmit={handleSubmit}>
                                <div className="form-login">
                                    <label>Current Password</label>
                                    <div className="form-addons">
                                        <input
                                            type="password"
                                            name="currentPassword"
                                            placeholder="Enter your current password"
                                            value={form.currentPassword}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                            autoComplete="current-password"
                                        />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>New Password</label>
                                    <div className="form-addons">
                                        <input
                                            type="password"
                                            name="newPassword"
                                            placeholder="Enter your new password"
                                            value={form.newPassword}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                            autoComplete="new-password"
                                        />
                                    </div>
                                </div>
                                <div className="form-login">
                                    <label>Confirm New Password</label>
                                    <div className="form-addons">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm your new password"
                                            value={form.confirmPassword}
                                            onChange={handleChange}
                                            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
                                            autoComplete="new-password"
                                        />
                                    </div>
                                </div>
                                {error && <div className="text-red-600 mb-2">{error}</div>}
                                {success && <div className="text-green-600 mb-2">{success}</div>}
                                <div className="form-login">
                                    <button
                                        type="submit"
                                        className="btn btn-login w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
                                        disabled={loading}
                                    >
                                        {loading ? 'Changing...' : 'Change Password'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <span className="login-sides"></span>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
