import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface UserProfileProps {
  username: string;
}

const UserProfile = ({ username }: UserProfileProps) => {
  const userStats = {
    level: 42,
    experience: 75,
    nextLevelXp: 1000,
    currentXp: 750,
    playtime: '156 часов',
    faction: 'Полиция',
    money: 125000,
    reputation: 89,
    rank: 'Капитан',
    kills: 234,
    deaths: 89,
    kd: 2.63,
    achievements: 18,
    vehicles: 5
  };

  const achievements = [
    { name: 'Первые шаги', description: 'Достигнут 10 уровень', icon: 'Trophy', color: 'text-gaming-orange' },
    { name: 'Богач', description: 'Накоплено 100к монет', icon: 'DollarSign', color: 'text-yellow-500' },
    { name: 'Ветеран', description: '100 часов игры', icon: 'Clock', color: 'text-primary' },
    { name: 'Элитный боец', description: 'K/D > 2.0', icon: 'Zap', color: 'text-red-500' }
  ];

  const recentActivity = [
    { action: 'Выполнено задание "Патруль района"', time: '2 часа назад', xp: '+150 XP' },
    { action: 'Повышение до звания Капитан', time: '1 день назад', xp: '+500 XP' },
    { action: 'Куплен автомобиль Sultan', time: '2 дня назад', xp: null }
  ];

  return (
    <div className="space-y-6">
      <Card className="animate-scale-in bg-gradient-to-br from-card to-primary/10 border-primary/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-6">
            <Avatar className="w-24 h-24 border-4 border-primary">
              <AvatarFallback className="text-3xl bg-primary text-white font-bold">
                {username.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl font-bold">{username}</h2>
                <Badge className="bg-primary">Уровень {userStats.level}</Badge>
                <Badge variant="outline" className="border-gaming-orange text-gaming-orange">
                  VIP
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <Icon name="Shield" size={18} className="text-secondary" />
                <span className="text-muted-foreground">{userStats.faction} • {userStats.rank}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Опыт до {userStats.level + 1} уровня</span>
                  <span className="font-medium">{userStats.currentXp} / {userStats.nextLevelXp}</span>
                </div>
                <Progress value={userStats.experience} className="h-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="hover-scale animate-fade-in border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
              <Icon name="Wallet" size={16} />
              Баланс
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-primary">${userStats.money.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className="hover-scale animate-fade-in border-secondary/20" style={{ animationDelay: '0.1s' }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
              <Icon name="Clock" size={16} />
              Игровое время
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-secondary">{userStats.playtime}</p>
          </CardContent>
        </Card>

        <Card className="hover-scale animate-fade-in border-accent/20" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
              <Icon name="Star" size={16} />
              Репутация
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-accent">{userStats.reputation}%</p>
          </CardContent>
        </Card>

        <Card className="hover-scale animate-fade-in border-gaming-orange/20" style={{ animationDelay: '0.3s' }}>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2 text-muted-foreground">
              <Icon name="Car" size={16} />
              Автомобили
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-gaming-orange">{userStats.vehicles}</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Award" size={20} className="text-primary" />
              Достижения
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className={`mt-0.5 ${achievement.color}`}>
                  <Icon name={achievement.icon as any} size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">{achievement.name}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Target" size={20} className="text-secondary" />
                Боевая статистика
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Убийств</span>
                <span className="text-xl font-bold text-green-500">{userStats.kills}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Смертей</span>
                <span className="text-xl font-bold text-red-500">{userStats.deaths}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">K/D Ratio</span>
                <span className="text-xl font-bold text-primary">{userStats.kd}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Activity" size={20} className="text-accent" />
                Последняя активность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start justify-between gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                  {activity.xp && (
                    <Badge variant="outline" className="text-xs text-green-500 border-green-500">
                      {activity.xp}
                    </Badge>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
